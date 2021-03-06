import cv2
import numpy as np
from socket import *
from select import *
import sys
from time import sleep


HOST = '192.168.0.120'
PORT = 2004
BUFSIZE = 1024
ADDR = (HOST,PORT)

clientSocket = socket(AF_INET, SOCK_STREAM)# 서버에 접속하기 위한 소켓을 생성한다.

clientSocket.connect(ADDR) # 서버에 접속을 시도한다.

print('connect is success')

cap = cv2.VideoCapture(0) # 0 or 1

readings = [-1, -1]
display = [0, 0]

Circle_Inertia = 0.6
Gaussian_ksize = (7, 7)
canny_threshold_min = 100
canny_threshold_max = 250

###

params = cv2.SimpleBlobDetector_Params()
params.filterByInertia = True
params.minInertiaRatio = Circle_Inertia

detector = cv2.SimpleBlobDetector_create(params)

###

while True:
    ret, frame = cap.read()
    # print(ret, frame)
    
    frame_blurred = cv2.GaussianBlur(frame, Gaussian_ksize, 1)
    frame_gray = cv2.cvtColor(frame_blurred, cv2.COLOR_BGR2GRAY)
    frame_canny = cv2.Canny(frame_gray, canny_threshold_min, canny_threshold_max, apertureSize=3, L2gradient=True)
    
    ####
    keypoints = detector.detect(frame_canny)

    num = len(keypoints)
    readings.append(num)

    if readings[-1] == readings[-2] == readings[-3] == readings[-4] == readings[-5] == readings[-6]:
        #if readings[-5] != readings[-4]:
        # cv2.imwrite("Before.png", frame)

            im_with_keypoints = cv2.drawKeypoints(frame, keypoints, np.array([]), (0, 0, 255), cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
            cv2.putText(im_with_keypoints, str(num), (500, 250), cv2.FONT_HERSHEY_SCRIPT_SIMPLEX, 5, (0, 255, 0))
                        
            # socketTxData = bytes([88,2,0,1,8,37,68,87,48,49,49,48,48,])
          # socketTxData = bytes([76,83,73,83,45,88,71,84,0,0,0,0,160,51,0,0,18,0,0,0,88,0,2,0,0,0,1,0,4,0,37,67,87,53,2,0,])
           # socketTxData = bytes([76,83,73,83,45,88,71,84,0,0,0,0,160,51,0,0,18,0,0,0,88,0,2,0,0,0,1,0,8,0,37,68,87,48,49,49,48,48,2,0,])
            socketTxData = bytes([76,83,73,83,45,88,71,84,0,0,0,0,160,51,0,0,22,0,0,0,88,0,2,0,0,0,1,0,8,0,37,68,87,48,49,49,48,48,2,0,])                                        
            num_little = num.to_bytes(2, 'little')
            # print(num_little)
            # socketTxData.insert(socketTxData+num_little)            
            if num != 0:
                print(num)
                try:
                    
                    clientSocket.send(socketTxData + num_little)
                    msg = clientSocket.recv(1024)
                    print(msg)
                    
                except  Exception as e:
                     print(e)
        
                cv2.imwrite("After.png", im_with_keypoints)
                #cv2.imshow("Dice Reader", im_with_keypoints) #break선언시 실행 불가
                #break
            sleep(0.3)
cv2.destroyAllWindows()