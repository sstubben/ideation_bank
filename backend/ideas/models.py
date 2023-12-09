from django.db import models

class Idea(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    fun_factor = models.IntegerField()
    complexity_factor = models.IntegerField()
