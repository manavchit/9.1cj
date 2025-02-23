pipeline {
    agent any
    
    environment {
        NETLIFY_SITE_ID = '8ed69f4e-a423-4bb6-b83f-e25890c100d5'
    }
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install' // Install dependencies
                bat 'npm run build' // Build the React app
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --passWithNoTests' // Run automated tests
            }
        }

        stage('Code Quality Analysis') {
            steps {
                bat 'npx eslint src' // Run code quality analysis with ESLint
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                bat 'docker build -t my-react-app .' // Build Docker image
                bat 'docker stop my-react-container || exit 0' // Stop existing container (if running)
                bat 'docker rm my-react-container || exit 0' // Remove existing container (if exists)
                bat 'docker run -d --name my-react-container -p 3000:3000 my-react-app' // Run Docker container
            }
        }
        
        stage('Release to Netlify') {
            steps {
                script {
                    bat '"C:\\Program Files\\Git\\bin\\bash.exe" -c "netlify deploy --dir=./build --prod --site=${env.NETLIFY_SITE_ID}"'
                }
            }
        }
    }
    
    post {
        success {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Successful",
                      body: 'The build was successful. Congratulations!',
                      to: 'manav771177@gmail.com',
                      attachLog: true
        }
        failure {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Failed",
                      body: 'The build has failed. Please investigate.',
                      to: 'manav771177@gmail.com',
                      attachLog: true
        }
    }
}
