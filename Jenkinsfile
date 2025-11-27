// Jenkinsfile

pipeline {
    // Usa uma imagem Node.js como agente para garantir que 'npm' esteja disponível
    agent {
        docker { 
            image 'node:lts-alpine' // Imagem leve e estável com Node.js e NPM
        }
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clona o código-fonte do repositório configurado
                checkout scm 
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependências do Node.js...'
                // O comando 'npm' funciona aqui dentro do container Node.js
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Rodando testes de CI (jest)...'
                // Executa os testes que validam a aplicação
                sh 'npm test'
            }
        }
        stage('Archive Artifacts') {
            steps {
                echo 'Arquivando código-fonte'
                // Arquiva o código-fonte
                archiveArtifacts artifacts: 'src/**'
            }
        }
    }
    post {
        failure {
            echo "Pipeline FALHOU! Um dos estágios (provavelmente testes) falhou."
        }
        success {
            echo "Pipeline CONCLUÍDO com SUCESSO! Aplicação pronta para deploy."
        }
    }
}