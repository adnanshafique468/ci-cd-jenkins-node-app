// pipeline {
//     agent any

//     environment {
//         APP_NAME = "node-app"
//     }

//     stages {

//         stage('Checkout Code') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Stop Old App') {
//             steps {
//                 sh '''
//                 pm2 stop $APP_NAME || true
//                 pm2 delete $APP_NAME || true
//                 '''
//             }
//         }

//         stage('Start App') {
//             steps {
//                 sh 'pm2 start server.js --name $APP_NAME'
//             }
//         }

//         stage('Save PM2') {
//             steps {
//                 sh 'pm2 save'
//             }
//         }
//     }

//     post {
//         success {
//             echo '🚀 Deployment Successful!'
//         }
//         failure {
//             echo '❌ Deployment Failed!'
//         }
//     }
// }

// pipeline {
//     agent any

//     environment {
//         APP_NAME = "node-app"
//         APP_DIR = "/home/ubuntu/jenkins-node-app"  // <-- aapka actual project folder
//     }

//     stages {

//         stage('Pull Latest Code') {
//             steps {
//                 echo 'Pulling latest code from GitHub...'
//                 sh "cd $APP_DIR && git pull origin main"
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 echo 'Installing npm packages...'
//                 sh "cd $APP_DIR && npm install"
//             }
//         }

//         stage('Restart Application') {
//             steps {
//                 echo 'Restarting Node app using PM2...'
//                 sh """
//                 cd $APP_DIR
//                 pm2 stop $APP_NAME || true
//                 pm2 delete $APP_NAME || true
//                 pm2 start server.js --name $APP_NAME
//                 pm2 save
//                 """
//             }
//         }
//     }

//     post {
//         success {
//             echo '🚀 Deployment Successful!'
//         }
//         failure {
//             echo '❌ Deployment Failed!'
//         }
//     }
// }

pipeline {
    agent any

    environment {
        APP_NAME = "node-app"
        APP_DIR = "/home/ubuntu/ci-cd-jenkins-node-app"  // <-- Correct EC2 folder
    }

    stages {

        stage('Pull Latest Code') {
            steps {
                echo 'Pulling latest code from GitHub...'
                sh "cd $APP_DIR && git pull origin main"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh "cd $APP_DIR && npm install"
            }
        }

        stage('Restart Application') {
            steps {
                echo 'Restarting Node app using PM2...'
                sh """
                cd $APP_DIR
                pm2 stop $APP_NAME || true
                pm2 delete $APP_NAME || true
                pm2 start server.js --name $APP_NAME
                pm2 save
                """
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}