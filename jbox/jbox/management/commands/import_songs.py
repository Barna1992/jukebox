# myapp/management/commands/my_custom_command.py

from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Reads and processes a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_filename', type=str, help='Name of the CSV file')

    def handle(self, *args, **options):
        csv_filename = options['csv_filename']

        with open(csv_filename, 'r') as csv_file:
            for row in csv_file.split('\n'):
                # Process each row as needed
                self.stdout.write(self.style.SUCCESS(f'CSV row: {row}'))


