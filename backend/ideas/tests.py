from django.test import TestCase
from .models import Idea

class IdeaModelTest(TestCase):
    def test_idea_creation(self):
        idea = Idea.objects.create(
            title="Test Idea",
            description="This is a test idea.",
            fun_factor=5,
            complexity_factor=3
        )

        self.assertEqual(idea.title, "Test Idea")
        self.assertEqual(idea.description, "This is a test idea.")
        self.assertEqual(idea.fun_factor, 5)
        self.assertEqual(idea.complexity_factor, 3)
