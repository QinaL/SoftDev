# how-to :: SET UP A DIGITALOCEAN DROPLET
---
## Overview
- Using DigitalOcean to create servers
- Install ubuntu 20.04.02 and apache2 
- first part of LAMP (Linux, Apache, Mysql (swap for sqlite), Python~~/Pearl/PHP~~)

### Estimated Time Cost: _

### Prerequisites:

- Have a GitHub account and obtain a GitHub Student Developer Pack. 
- Know the type of droplet you will need beforehand to make provisioning one quicker and easier.

1. Log into DigitalOcean with your GitHub account. 
    - if not already used up, obtain the promo code from Github's Edu-pack to get $100 
2. Create a droplet with these parameters:
    - Ubuntu 20.04 (LTS) x64
    - Basic droplet (Shared CPU) 
    - Regular Intel ($5 per month)
    - A datacenter in New York
    - Choose SSH keys for authentication and follow the instructions on the side for how to create and/or add one
3. Go through the steps for creating and adding a sudo user on this [page](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart), which is also under "Resources."
    First, enter this command:
    ```
    # adduser <username>
    ```
    Then, answer the questions that are presented to you.
    Lastly, enter this command to add the user to the sudo group:
    ```
    # usermod -aG sudo <username>
    ```
4. Access your droplet 
    - If you want to access the droplet via a terminal, ssh as root to your ipv4 address and say yes for the fingerprint and you should be in.
        ```
        $ ssh root@<ipv4 address>
        ```
    - example: 
        ```
        $ ssh root@159.65.236.192
        ```
    - You can also ssh as your sudo user directly:
        ```
        $ ssh <username>@<ipv4 address>
        ```
5. Install Apache


### Resources
* https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
* https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart
* https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/
* https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04

---

Accurate as of (last update): 2022-01-14

#### Contributors: 
Andy Lin, pd2  
Qina Liu, pd2  
Roshani Shrestha, pd2  
