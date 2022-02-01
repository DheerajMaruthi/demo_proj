# Generated by Django 3.2.11 on 2022-01-31 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='id',
        ),
        migrations.AddField(
            model_name='homepage',
            name='city',
            field=models.CharField(default='Banglore', max_length=60),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='name',
            field=models.CharField(default='Salman', max_length=60, primary_key=True, serialize=False),
        ),
    ]
