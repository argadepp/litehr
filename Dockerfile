# Use Ubuntu as the base image
FROM ubuntu:latest

WORKDIR /var/www/html/hr

# Update and upgrade the system
RUN apt-get update && \
    apt-get upgrade -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata unzip

# Install PHP 8.2 and required extensions
RUN apt-get install -y software-properties-common && \
    add-apt-repository ppa:ondrej/php && \
    apt-get update && \
    apt-get install -y php8.2-mysql php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-zip php8.2-curl php-gd

# Install MySQL Server and Client
RUN apt-get install -y mysql-client

# Enable Apache modules
RUN a2enmod rewrite

# Restart Apache
RUN service apache2 restart

# Install Composer
RUN apt-get install -y composer

COPY . .

RUN chown -R www-data:www-data *

COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

RUN php8.2 artisan key:generate
# Expose port 80 (assuming your web server runs on this port)
EXPOSE 80

# Run migrations and storage:link on container startup
CMD ["sh", "-c", "php8.2 artisan migrate && php8.2 artisan storage:link && apache2ctl -D FOREGROUND"]