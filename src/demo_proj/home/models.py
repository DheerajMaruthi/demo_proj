from django.db import models

# Create your models here.


class HomePage(models.Model):
    name = models.CharField(max_length=60,primary_key=True,default="Salman")
    city = models.CharField(max_length=60,default="Banglore")
    pub_date = models.DateField()

    def __str__(self):
        return '%s--%s' % (self.city,self.pub_date)
