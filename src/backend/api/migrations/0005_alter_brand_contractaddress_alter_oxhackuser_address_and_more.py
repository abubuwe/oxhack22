# Generated by Django 4.0 on 2022-02-27 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_oxhackuser_claimedtokens'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='contractAddress',
            field=models.CharField(default='', max_length=65),
        ),
        migrations.AlterField(
            model_name='oxhackuser',
            name='address',
            field=models.CharField(max_length=65),
        ),
        migrations.AlterField(
            model_name='token',
            name='contractAddress',
            field=models.CharField(max_length=65),
        ),
    ]
