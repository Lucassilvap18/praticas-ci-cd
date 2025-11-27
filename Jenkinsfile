// Jenkinsfile (Usando a imagem Node.js)

pipeline {
    // Define que o Pipeline será executado dentro de um container Node.js
    agent { 
        docker { 
            image 'node:20.11.1-alpine' // Imagem oficial com Node e NPM
            // Mapeia o diretório de trabalho do Jenkins para o container
            args '-u root -v /var/run/docker.sock:/var/run/docker.sock' 
        } 
    }

    stages {
        // ... (Checkout Code) ...
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependências do Node.js dentro do container Node...'
                // O comando 'npm' AGORA funciona, pois está no PATH da imagem 'node:...'
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Rodando testes de CI (jest)...'
                sh 'npm test'
            }
        }
        // ...
    }
    // ...
}