# Generated by Django 4.2.3 on 2023-07-12 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='music_type',
            field=models.CharField(blank=True, choices=[('RO', 'Rock'), ('PO', 'Pop'), ('DA', 'Dance'), ('PU', 'Punk'), ('GR', 'Grunge'), ('IT', 'Italiani')], default='Pop', max_length=300, null=True),
        ),
    ]
