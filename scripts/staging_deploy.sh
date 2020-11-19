cd ..

ng build --prod || exit;

cd dist || exit

zip -r portfolio-website portfolio-website || exit

scp portfolio-website.zip pi@192.168.1.179:/home/pi/ || exit

ssh pi@192.168.1.179 '
  sudo rm -rf portfolio-website
  sudo rm -rf /var/www/html/*
  sudo unzip portfolio-website.zip
  sudo cp -r portfolio-website/. /var/www/html/
  sudo service nginx restart
'

