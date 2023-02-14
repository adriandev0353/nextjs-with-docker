#!/usr/bin/expect

# Install expect package for the below expect syntax
sudo apt-get install expect

# Install brew
spawn /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
expect "Press RETURN to continue or any other key to abort"
send "\r"

# Set path for home brew
(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /root/.profile
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Download kubectl checksum file
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

# Validate the kubectl binary against checksum file
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check

# Install kubectl
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Show kubectl verison
kubectl version --client --output=yaml

# ------------------------------------ Installing a cluster with kind ---------------------------------------------------------------
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

#Install ctlptl
brew install tilt-dev/tap/ctlptl

# Create cluster
ctlptl create cluster kind --registry=ctlptl-registry

# set cluster
kubectl config set-cluster kind-kind --insecure-skip-tls-verify=true

# Setup ingress controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/baremetal/deploy.yaml

# Setup tilt
curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash