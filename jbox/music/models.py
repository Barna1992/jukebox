from django.db import models


class Dedication(models.Model):
    description = models.TextField()
    nickname = models.CharField(max_length=1024)

    def __str__(self) -> str:
        return f"{self.description} --- BY: {self.nickname}"

    @property
    def name(self):
        return f"{self.description} --- {self.nickname}"

class Song(models.Model):
    CHOICES = (
        ('RO', 'Rock'),
        ('HR', 'Hard Rock'),
        ('HM', 'Heavy Metal'),
        ('PO', 'Pop'),
        ('DA', 'Dance'),
        ('PU', 'Punk'),
        ('GR', 'Grunge'),
        ('FO', 'Folk'),
        ('IT', 'Italiani'),
    )
    title = models.CharField(max_length=1024)
    author = models.CharField(max_length=1024, null=True, blank=True)
    dedications = models.ManyToManyField(Dedication)
    music_type = models.CharField(max_length=300, choices = CHOICES, default=CHOICES[1][0], blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.title} - {self.author}"
