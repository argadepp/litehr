# Use the official PHP image with Apache
FROM php:8.2-apache

# Set the working directory
WORKDIR /var/www/html

# Install required system packages
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libzip-dev \
    libcurl4-openssl-dev \
    libxml2-dev \
    libgd-dev \
    zlib1g-dev \
    unzip

# Enable Apache modules
RUN a2enmod rewrite

# Copy the application files into the container
COPY . /var/www/html

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Create a temporary php.ini file to enable required extensions
RUN echo "extension=bcmath" > /usr/local/etc/php/conf.d/bcmath.ini \
    && echo "extension=ctype" > /usr/local/etc/php/conf.d/ctype.ini \
    && echo "extension=curl" > /usr/local/etc/php/conf.d/curl.ini \
    && echo "extension=dom" > /usr/local/etc/php/conf.d/dom.ini \
    && echo "extension=fileinfo" > /usr/local/etc/php/conf.d/fileinfo.ini \
    && echo "extension=json" > /usr/local/etc/php/conf.d/json.ini \
    && echo "extension=mbstring" > /usr/local/etc/php/conf.d/mbstring.ini \
    && echo "extension=openssl" > /usr/local/etc/php/conf.d/openssl.ini \
    && echo "extension=pcre" > /usr/local/etc/php/conf.d/pcre.ini \
    && echo "extension=pdo" > /usr/local/etc/php/conf.d/pdo.ini \
    && echo "extension=tokenizer" > /usr/local/etc/php/conf.d/tokenizer.ini \
    && echo "extension=xml" > /usr/local/etc/php/conf.d/xml.ini

# Install dependencies with Composer, ignoring platform requirements
RUN composer install --no-interaction --optimize-autoloader --no-dev --ignore-platform-req=ext-pcntl --ignore-platform-req=ext-gd --ignore-platform-req=ext-zip

# Install PHP extensions
RUN docker-php-ext-install zip

# Set up file permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/lang

# Generate application key
RUN php artisan key:generate

# Create symbolic link for storage
RUN php artisan storage:link

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
