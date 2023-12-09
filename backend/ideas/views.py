from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import json

from .models import Idea

@method_decorator(csrf_exempt, name='dispatch')
class IdeaCreateView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        title = data.get('title')
        description = data.get('description')
        fun_factor = data.get('fun_factor')
        complexity_factor = data.get('complexity_factor')

        idea = Idea.objects.create(
            title=title,
            description=description,
            fun_factor=fun_factor,
            complexity_factor=complexity_factor,
        )

        return JsonResponse({'id': idea.id, 'message': 'Idea created successfully'})
