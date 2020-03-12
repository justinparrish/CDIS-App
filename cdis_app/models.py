from django.db import models
import datetime

PATIENT_STATUS_CHOICES = (
    (True, 'Admitted'),
    (False, 'Discharged')
)

FINANCIAL_CLASS_CHOICES = (
('Aetna HMO', 'Aetna HMO'),
('Aetna POS', 'Aetna POS'),
('Aetna PPO', 'Aetna PPO'),
('Alliant Health Plans', 'Alliant Health Plans'),
('Amerigroup (Medicaid)', 'Amerigroup (Medicaid)'),
('Athens Area Health Plan', 'Athens Area Health Plan'),
('BCBS HMO', 'BCBS HMO'),
('BCBS POS', 'BCBS POS'),
('BCBS PPO', 'BCBS PPO'),
('Beech Street', 'Beech Street'),
('Care Source (Medicaid)', 'Care Source (Medicaid)'),
('Cigna HMO', 'Cigna HMO'),
('Cigna POS', 'Cigna POS'),
('Cigna PPO', 'Cigna PPO'),
('CorVel', 'CorVel'),
('Coventry Healthcare HMO', 'Coventry Healthcare HMO'),
('Coventry Healthcare POS', 'Coventry Healthcare POS'),
('Coventry Healthcare National Network PPO', 'Coventry Healthcare National Network PPO'),
('Crescent Health Solutions', 'Crescent Health Solutions'),
('FirstHealth PPO (Coventry Product)', 'FirstHealth PPO (Coventry Product)'),
('Galaxy Health Network', 'Galaxy Health Network'),
('Global Medical Management', 'Global Medical Management'),
('Health One Alliance', 'Health One Alliance'),
('Humana HMO', 'Humana HMO'),
('Humana POS', 'Humana POS'),
('Humana PPO', 'Humana PPO'),
('Industry Buying Group', 'Industry Buying Group'),
('Kaiser HMO', 'Kaiser HMO'),
('Kaiser POS', 'Kaiser POS'),
('Kaiser PPO', 'Kaiser PPO'),
('LifeWell Health Partners', 'LifeWell Health Partners'),
('Memorial Health Services', 'Memorial Health Services'),
('MultiPlan', 'MultiPlan'),
('Northeast Georgia Health Partners', 'Northeast Georgia Health Partners'),
('NovaNet', 'NovaNet'),
('Peach State Health Plan (Medicaid)', 'Peach State Health Plan (Medicaid)'),
('Private Health Care Systems(PHCS)', 'Private Health Care Systems(PHCS)'),
('State Health Benefit Plan', 'State Health Benefit Plan'),
('United Healthcare HMO', 'United Healthcare HMO'),
('United Healthcare POS', 'United Healthcare POS'),
('United Healthcare PPO', 'United Healthcare PPO'),
('USA Managed Care Organization', 'USA Managed Care Organization'),
('Walmart Emory ACO Health Plan', 'Walmart Emory ACO Health Plan'),
('WellCare (CMO Medicaid)', 'WellCare (CMO Medicaid)')
)

class Employee(models.Model):
    name = models.CharField(max_length=40)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)
    email = models.EmailField(max_length=200)
    
class Patient(models.Model):
    account_number = models.CharField(max_length=13)
    medical_rec_number = models.CharField(max_length=9)
    admit_date = models.DateField(auto_now=False)
    discharge_date = models.DateField(auto_now=False)
    length_of_stay = models.IntegerField(default=1)
    financial_class= models.CharField(max_length=60, choices=FINANCIAL_CLASS_CHOICES)
    status = models.BooleanField(choices=PATIENT_STATUS_CHOICES)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='employee')
    
class Demographic(models.Model):
    patient_name = models.CharField(max_length=40)
    age = models.IntegerField()
    date_of_birth = models.DateField(auto_now=False)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patient')

class Room(models.Model):
    nursing_unit = models.CharField(max_length=8)
    room = models.CharField(max_length= 15)
    date_in = models.DateField(auto_now=False)
    date_out = models.DateField(auto_now=False)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patients')
    
class Query(models.Model):
    doctor_name = models.CharField(max_length=60)
    doctor_question = models.CharField(max_length=1000)
    clinical_indicators = models.CharField(max_length=1000)
    # H&P
    history_and_physical = models.CharField(max_length=1000)
    # Tx
    treatment = models.CharField(max_length=1000)