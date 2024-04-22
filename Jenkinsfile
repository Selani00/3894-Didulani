pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/Selani00/3894-Didulani'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t selani004/nodeapp-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerhubpassword', variable: 'test-dockerhubpass')]) {
   
               bat'docker login -u selani004 -p ${test-dockerhubpass}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push selani004/nodeapp-cuban:%BUILD_NUMBER% .'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}