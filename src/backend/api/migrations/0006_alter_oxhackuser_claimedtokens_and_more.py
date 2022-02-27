# Generated by Django 4.0 on 2022-02-27 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_brand_contractaddress_alter_oxhackuser_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='oxhackuser',
            name='claimedTokens',
            field=models.ManyToManyField(blank=True, null=True, related_name='claimedTokens', to='api.Token'),
        ),
        migrations.AlterField(
            model_name='oxhackuser',
            name='tokens',
            field=models.ManyToManyField(blank=True, null=True, to='api.Token'),
        ),
    ]
