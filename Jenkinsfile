
pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage("Setup Dependencies") {
            steps {
                git branch: "main", url: "https://github.com/manavchit/9.1cj.git"
                bat "npm install --verbose --omit=optional"
            }
        }
        
        stage("Build Project") {
            steps {
                bat "npm run build"
            }
        }
        
        stage("Run Tests") {
            steps {
                bat "npm test -- --passWithNoTests"
            }
        }
        
        stage("Static Code Analysis") {
            steps {
                bat "npx eslint src"
            }
        }
          stage("Deploy"){
            steps{
                script{
                    def netlifySiteID = '8ed69f4e-a423-4bb6-b83f-e25890c100d5'
                    def netlifyAccessToken = 'nfp_a2KFg8gtTBgeZL6AbEpVZvNWzpzRbnAr2f7d'
                    
                    bat "npm install netlify-cli --save-dev"
                    bat "npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod"
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
                       body: 'The build has failed. please investigate',
                       to: 'manav771177@gmail.com',
                       attachLog: true
         }
     }
             
}
