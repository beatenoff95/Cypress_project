pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
       
        stage('Env Variables') {
            steps {
                echo 'The build number is ${env.BUILD_NUMBER}”'               
                echo 'You can also use \${BUILD_NUMBER} -> ${BUILD_NUMBER}'
                echo 'I can access $BUILD_NUMBER in shell command as well.'
            }
        }
        
        stage('Unit Tests') {
            steps {
                bat 'node_modules/.bin/cypress run'
            }
        }
        
        stage('Finish') {
            steps {
                echo 'Finish'
            }
        }
    }
    
    post {
    always {
      junit(testResults: 'builds/${currentBuild.number}/junitResult.xml', allowEmptyResults : true)
      archiveArtifacts(artifacts: 'cypress/videos/sample_spec.js.mp4', fingerprint: true)
    }
  }
}
