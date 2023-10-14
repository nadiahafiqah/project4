from django.db import models
from datetime import date

# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=30)
    dob = models.DateField()
    contact_number = models.PositiveIntegerField()
    # policies = models.ManyToOneRel()


class Policy(models.Model):
    # client = models.Ref
    name = models.CharField(max_length=30)
    policy_no = models.PositiveIntegerField
    policy_start = models.DateField(default=date.today)
    life_assured = models.CharField(max_length=30)
    renewal_date = models.DateField()
    payment_frequency = models.DurationField()
    payment_period = models.DurationField()
    premium = models.DecimalField(decimal_places=2, max_digits=8)
    coverage = models.TextField()
