pipeline {

    // O pipeline pode rodar em qualquer agente disponível no Jenkins
    agent any

    tools {
        nodejs "node18"
    }

    environment {
        // Nome da imagem no DockerHub (mude para seu usuário e nome)
        DOCKERHUB_REPO = "lucasdev18/my-node-app"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "🔎 Baixando o código do repositório..."
                // Recupera o código da branch atual do GitHub/GitLab
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo "📦 Instalando dependências do Node.js..."
                sh "npm install"
            }
        }

        stage('Lint') {
            steps {
                echo "🧹 Rodando ESLint para verificar padrões de código..."
                sh "npm run lint"
            }
        }

        stage('Run Tests') {
            steps {
                echo "🧪 Executando testes automatizados..."
                sh "npm test"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Construindo imagem Docker da aplicação..."

                // Cria uma tag única usando o BUILD_ID do Jenkins
                sh """
                    docker build -t ${DOCKERHUB_REPO}:${BUILD_ID} .
                    docker tag ${DOCKERHUB_REPO}:${BUILD_ID} ${DOCKERHUB_REPO}:latest
                """
            }
        }

        stage('Login DockerHub & Push') {
            steps {
                echo "🔐 Realizando login no DockerHub..."

                // Usa credenciais configuradas no Jenkins (ID: dockerhub-credentials)
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"

                    echo "📤 Enviando imagem para o DockerHub..."
                    sh "docker push ${DOCKERHUB_REPO}:${BUILD_ID}"
                    sh "docker push ${DOCKERHUB_REPO}:latest"
                }
            }
        }
    }

    post {
        always {
            echo "📌 Pipeline finalizou (com sucesso ou falha)."
        }
        success {
            echo "✅ Pipeline finalizada com sucesso!"
        }
        failure {
            echo "❌ Pipeline falhou. Verifique os logs."
        }
    }
}
