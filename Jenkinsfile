pipeline {
     agent any
    // tools {
    //     dockerTool 'Docker-Windows'
    // }
    stages {
        stage('Build') {
             agent {
                docker {
                  
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
