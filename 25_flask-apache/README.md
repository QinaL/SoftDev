# how-to :: Deploy Flask on a DigitalOcean Droplet
---
## Overview
We will be able to deploy our Flask apps on our digital droplets.

### Estimated Time Cost: 0.75 hours

### Prerequisites:

- Have a digital droplet ready with Apache2 installed.

1. Once you ssh into your sudo account, run this command:   
    ```   
    sudo apt-get install libapache2-mod-wsgi python-dev 
    ```
2. ```  
    cd /var/www/
    ```
3. ```  
    sudo a2enmod wsgi
   ```
4. ```  
    sudo mkdir FlaskApp
    ```
5. ```  
    cd FlaskApp
    ```
6. ```  
    sudo mkdir FlaskApp
    ```
7. ```  
    cd FlaskApp
    ```
8. ```  
    sudo mkdir static templates
    ```
9. ```  
    exit
    ```
10. ```  
    scp <path_to_app> <user>@<ip_address>:/var/www/FlaskApp/FlaskApp
    ```
11. ssh back into your sudo account and cd into `/var/www/FlaskApp/FlaskApp`.
12. ```  
    sudo apt-get install python-pip
    sudo pip install virtualenv
    sudo virtualenv <venv>
    source venv/bin/activate
    sudo pip install Flask
    sudo python __init__.py
    ```
    This should display "Running on http://127.0.0.1:5000/"; if so success!
13. ```  
    cd /etc/apache2/sites-available/
    ```
14. ```  
    sudo nano /etc/apache2/sites-available/FlaskApp.conf
    ```
    This is what goes inside the file:   
    ```
    <VirtualHost *:80>
		ServerName <ip_address>
		ServerAdmin <user>@<ip_address>
		WSGIScriptAlias / /var/www/FlaskApp/FlaskApp.wsgi
		<Directory /var/www/FlaskApp/FlaskApp/>
			Order allow,deny
			Allow from all
		</Directory>
		Alias /static /var/www/FlaskApp/FlaskApp/static
		<Directory /var/www/FlaskApp/FlaskApp/static/>
			Order allow,deny
			Allow from all
		</Directory>
		ErrorLog ${APACHE_LOG_DIR}/error.log
		LogLevel warn
		CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```
15. ```  
    sudo a2ensite FlaskApp
    ```
16. ```  
    systemctl reload apache2
    ```
17. To make sure your site is enabled, run this command:  
    ```  
    sudo a2ensite FlaskApp
    ```
18. ```  
    cd /var/www/FlaskApp
    ```
19. ```  
    sudo nano FlaskApp.wsgi
    ```
    This is what goes inside the file:  
    ```python
    #!/usr/bin/python
    import sys
    import logging
    logging.basicConfig(stream=sys.stderr)
    sys.path.insert(0,"/var/www/FlaskApp/")
    sys.path.append("/var/www/FlaskApp/FlaskApp/")

    from FlaskApp import app as application
    application.secret_key = 'Add your secret key'
    ```
20. ```  
    sudo apt-get install libapache2-mod-wsgi-py3
    ```
21. ```  
    sudo service apache2 restart
    ```
22. ```  
    cd FlaskApp/
    ```
23. ```  
    sudo chown -R www-data:www-data /var/www/FlaskApp/FlaskApp
    ```
24. ```  
    sudo chmod -R 775 /var/www/FlaskApp/FlaskApp
    ```
25. ```  
    sudo usermod -a -G www-data <user>  
    ```
26. Exit and then ssh back in again.  
27. - Check by running `ls -al blog within /var/www/FlaskApp/FlaskApp`  
        - got `-rwxrwxr-x 1 www-data www-data 136 Jan 20 01:56 __init__.py`  

26. ```  
    sudo service apache2 restart
    ```
27. cd back into FlaskApp  
28. To help deploy your Flask app smoothly:  
    ```
    pip install wheel 
    pip install flask
    pip install uwsgi
    pip install requests
    ```

    Make sure the file is named `__init__.py` and it looks like  
    ```python  
    if __name__ == "__main__":
        app.run(host='0.0.0.0')
    ```

    Then:  
    ```
    sudo ufw allow 5000
    ```
29. ```  
    sudo python3 __init__.py
    ```
30. If you want to test, do sudo ufw allow 5000 and run the flask app script in the created venv and load up the site via the ip address:5000

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps
* https://github.com/ElizaKnapp/workshop-repo/blob/main/25_flask-apache/README.md 

---

Accurate as of (last update): 2021-01-19

#### Contributors:  
Andy Lin, pd2  
Qina Liu, pd2  
Roshani Shrestha, pd2  