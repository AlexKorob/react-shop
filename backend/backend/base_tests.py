from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase


class APITestCaseWithAuthenticated(APITestCase):
    user_is_created = False

    def create_user(self):
        if not self.user_is_created:
            self.user = get_user_model().objects.create_user(username="alex", password="123")
            self.user_is_created = True

    def setUp(self):
        self.create_user()
        self.client.login(username="alex", password="123")
