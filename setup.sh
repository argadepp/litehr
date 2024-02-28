#!/bin/bash

# Update the system
sudo apt update
sudo apt upgrade -y

# Install PHP 8.2 and required extensions
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install -y php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-zip php8.2-curl php-gd

sudo apt install mysql-server mysql-client -y
# Enable Apache modules
sudo a2enmod rewrite
sudo systemctl restart apache2

# Install Composer
sudo apt install -y composer


# Install Composer dependencies
composer install --no-interaction --optimize-autoloader --no-dev --ignore-platform-req=ext-pcntl --ignore-platform-req=ext-gd --ignore-platform-req=ext-zip


