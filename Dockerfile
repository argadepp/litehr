# Use a lightweight base image with PHP
FROM php:8.2-apache

WORKDIR /var/www/html/hr

# Update and upgrade the system, install required tools
RUN apt-get update && \
    apt-get install -y unzip

# Enable Apache modules
RUN a2enmod rewrite

# Install MySQL Client
RUN apt-get install -y default-mysql-client

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy only necessary files
COPY . .

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/hr /var/www/html/hr/.env

# Configure Apache
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Generate Laravel key
RUN php artisan key:generate

# Expose port 80 (assuming your web server runs on this port)
EXPOSE 80

# Run migrations and storage:link on container startup
CMD ["sh", "-c", "php artisan migrate && php artisan storage:link && apache2-foreground"]