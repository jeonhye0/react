pipeline {
     agent any
    // tools {
    //     dockerTool 'Docker-Windows'
    // }
    stages {
        stage('Build') {
             agent {
                docker {
                    image 'node:22.12.0-alpine'
                    // 호스트의 Docker 소켓을 공유하고, 호스트 유저 권한을 맞춰 권한 문제를 방지합니다.
                    args '-v /var/run/docker.sock:/var/run/docker.sock --user root'
                    reuseNode true  //이전단계 설정 자유롭게 접근
                }
            }
            steps {
                sh '''
                    ls -la
                    node -v
                    npm -v
                    npm ci           
                    npm run build
                    ls -la
                '''
            }
        }
    }
}
