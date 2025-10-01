# 딥러닝을 이용한 모둠회 재료 인식 앱 개발

# 기술 스택
✓Frontend

![React Native](https://img.shields.io/badge/React%20Native-4FC08D?style=for-the-badge&logo=React&logoColor=white)


✓ Backend

[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

✓ DB Server

[![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/ec2/)

✓ API Test & Tools

<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">

✓ Infra & DevOps

<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github"> ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

# 프로젝트 소개

1) **기획의도**
    - 본 프로젝트는 딥러닝 기술을 활용하여 모둠회 이미지를 인식하고, 구성된 회의 종류를 사용자에게 실시간으로 알려주는 애플리케이션을 개발하는 것을 목표로 한다.
2) **프로젝트 내용**
    - 사용자가 스마트폰 카메라를 이용해 모둠회 사진을 찍으면, 딥러닝 모델인 YOLOv8을 사용하여 사진 속의 회 종류를 실시간으로 인식하고 분류한다. 이후 인식된 결과를 사용자에게 시각적으로 제공하며, 지속적인 학습을 통해 모델의 정확도를 향상시킨다.
3) **정의**
    - 모둠회 재료 인식 앱은 사용자가 모둠회 사진을 촬영하면, 해당 이미지에서 각 회의 종류를 식별하여 알려주는 딥러닝 기반 애플리케이션이다.

### 개발 배경 및 필요성

1) **프로젝트 제작 동기**
    - 회는 다양한 종류가 있으며, 일반 소비자가 이를 구분하는 것이 쉽지 않다. 특히, 회를 처음 접하는 사람들에게는 회의 종류를 식별하는 것이 큰 어려움이 될 수 있다. 이러한 문제를 해결하고자 딥러닝 기술을 활용하여 모둠회 이미지를 인식하고,
      각 회의 종류를 사용자에게 알려주는 애플리케이션을 개발하게 되었다.
2) **프로젝트 제작 목적**
    - 사용자가 모둠회를 쉽게 식별할 수 있도록 돕고, 회식 문화에서 더 나은 선택을 할 수 있도록 지원한다. 이를 통해 음식에 대한 이해도를 높이고, 사용자 경험을 개선한다.

### 프로젝트 특·장점

1) **주요 기능**
    - 모둠회 사진 촬영, 실시간 회 종류 인식, 회 정보 검색, 제철 회 정보 제공, 사용자 문의 기능 등 다양한 기능을 제공한다.
2) **신규 창작 프로젝트로서의 독창성**
    - (기존) 이미지 인식 애플리케이션으로 기존 제품은 명함 인식, 한자 필기 인식, 서류 인식 등의 제품이 있으나 모둠회 재료 인식 프로젝트처럼 음식을 인식하는 기능을 가진 유사한 제품은 없다.
    - (특장점) 따라서 본 프로젝트는 다음과 같은 독창성이 있다. YOLOv8 모델을 활용하여 다양한 회 종류를 정확하게 인식함으로써 높은 정확도와 신뢰성을 제공하는 점과 사용자로부터 수집된 데이터를 바탕으로 모델을 지속적으로 학습시켜, 시간이 지날수록 더        정확한 모둠회 재료 인식 결과를 제공한다는 점, React Native를 사용하여 iOS와 Android에서 모두 사용할 수 있는 앱을 개발하여 사용자 기반을 넓히고 다양한 디바이스에서 일관된 사용자 경험을 제공하는 점이다.
  
   
