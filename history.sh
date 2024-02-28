    1  sudo apt install awscli -y
    2  aws configure
    3  aws s3 ls
    4  aws s3 ls s3://
    5  aws s3 ls s3://pravil-argade
    6  aws s3 cp s3://pravil-argade/litehrm.zip
    7  aws s3 cp s3://pravil-argade/litehrm.zip .
    8  php -v
    9  cp litehrm.zip /var/www/html/
   10  cp -R litehrm.zip /var/www/html/
   11  sudo cp -R litehrm.zip /var/www/html/
   12  sudo chown -R ubuntu:ubuntu /var/www/html/
   13  cd /var/www/html/
   14  ls
   15  unzip litehrm.zip
   16  composer install --no-interaction --optimize-autoloader --no-dev --ignore-platform-req=ext-pcntl --ignore-platform-req=ext-gd --ignore-platform-req=ext-zip
   17  php8.2 artisan key:generate
   18  mysql
   19  sudo apt install mysql-server mysql-client -y
   20  sudo mysql
   21  mysql
   22  sudo mysql_secure_installation
   23  mysql_secure_installation
   24  sudo mysql_secure_installation
   25  ls -la
   26  sudo mysql
   27  mysql -u root -p
   28  vim .env
   29  sudo > /etc/apache2/sites-available/000-default.conf
   30  sudo su
   31  php8.2 artisan key:generate
   32  php8.2 artisan migrate
   33  php8.2 artisan storage:link
   34  sudo apt-get install php8.2-mysql
   35  php8.2 artisan key:generate
   36  php8.2 artisan migrate
   37  php8.2 artisan storage:link
   38  vim .env
   39  ls
   40  cd litehr/
   41  php8.2 artisan key:generate
   42  ls -la
   43  sudo chown -R ubuntu:ubuntu /var/www/html/litehr
   44  ls -la
   45  php8.2 artisan key:generate
   46  vim .env
   47  php8.2 artisan key:generate
   48  php8.2 artisan migrate
   49  php8.2 artisan storage:link
   50  mysql -u root -p
   51  sudo service reliad apache2
   52  sudo service reload apache2
   53  sudo service apache2 reload
   54  ls
   55  pwd
   56  sudo vim /etc/apache2/sites-available/000-default.conf
   57  sudo service apache2 reload
   58  sudo vim /etc/apache2/sites-available/000-default.conf
   59  sudo service apache2 reload
   60  sudo systemctl status apache2
   61  sudo tail -f /var/log/apache2/error.log
   62  ls -la
   63  cd vendor/
   64  ls -la
   65  sudo tail -f /var/log/apache2/error.log
   66  cd /var/www/html/litehr
   67  sudo chmod -R 775 storage
   68  sudo chown -R www-data:www-data storage
   69  sudo chmod -R 775 bootstrap/cache
   70  sudo chown -R www-data:www-data bootstrap/cache
   71  php artisan config:cache
   72  php artisan cache:clear
   73  sudo chown -R ubuntu:ubuntu bootstrap/cache
   74  php artisan config:cache
   75  php artisan cache:clear
   76  php artisan config:cache
   77  php artisan cache:clear
   78  sudo systemctl restart apache2
   79  ls -la
   80  sudo chmod -R 777 bootstrap/cache
   81  sudo chmod -R 777 .env
   82  sudo chmod -R 777 lang
   83  ls -la
   84  sudo chown -R ubuntu:ubuntu storage
   85  sudo systemctl restart apache2
   86  ls -la
   87  sudo tail -f /var/log/apache2/error.log
   88  sudo chmod -R 775 storage
   89  sudo chown -R www-data:www-data storage
   90  php artisan config:cache
   91  php artisan cache:clear
   92  sudo php artisan config:cache
   93  php artisan cache:clear
   94  sudo php artisan cache:clear
   95  ls -la
   96  sudo chown -R www-data:www-data /var/www/html/litehr
   97  ls -la
   98  sudo tail -f /var/log/apache2/error.log
   99  mysql -u root -p
  100  sudo tail -f /var/log/apache2/error.log
  101  sudo vim /etc/apache2/sites-available/000-default.conf
  102  sudo tail -f /var/log/apache2/access.log
  103  history
  104  composer -v
  105  ls
  106  cd /var/www/html/
  107  ls
  108  cd litehr/
  109  ls
  110  mysql -u root -p
  111  vim .env
  112  php8.2 artisan key:generate
  113  ls -la
  114  cd ../
  115  ls
  116  mkdir hr
  117  cp -R litehr hr/
  118  sudo cp -R litehr hr/
  119  cd hr/
  120  sudo chown -R ubuntu:ubuntu /var/www/html/hr
  121  ls
  122  ls -la
  123  cp -R ../litehrm.zip hr/
  124  cp -R ../litehrm.zip .
  125  rm -rf litehr
  126  ls
  127  unzip litehrm.zip
  128  sudo chown -R ubuntu:ubuntu /var/www/html/hr
  129  ls
  130  vim .env
  131  php8.2 artisan key:generate
  132  php8.2 artisan migrate
  133  php8.2 artisan storage:link
  134  sudo vim /etc/apache2/sites-available/000-default.conf
  135  sudo service apache2 reload
  136  sudo tail -f /var/log/apache2/access.log
  137  sudo tail -f /var/log/apache2/error.log
  138  ls -la
  139  sudo chown -R www-data:www-data /var/www/html/hr/storage/
  140  sudo service apache2 reload
  141  ls -la
  142  ls -la ../litehr
  143  sudo chown -R www-data:www-data /var/www/html/hr/
  144  ls -la
  145  sudo tail -f /var/log/apache2/access.log
  146  sudo tail -f /var/log/apache2/error.log
  147  composer clear-cache
  148  composer update
  149  sudo apt-get install php-gd
  150  sudo systemctl restart apache2
  151  history
