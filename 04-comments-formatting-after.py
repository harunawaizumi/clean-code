# (c) Maximilian Schwarzmüller / Academind GmbH

# *********
# Imports
# *********
from os import path, makedirs
from pathlib import Path

class DiskStorage:
    def __init__(self, directory):
        self.storage_directory = directory

    def get_directory_path(self):
        return Path(self.storage_directory)

    def create_directory(self):
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    def insert_file(self, file, content):
        file_path = self.get_directory_path()/ file
        file = open(sfile_path, 'w')
        file.write(content)
        file.close()
        # Todo: Add proper error handling

log_storage = DiskStorage('logs')

log_storage.create_directory()
log_storage.insert_file('test.txt', 'Test')