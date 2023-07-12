from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Song, Dedication
from .serializers import *

@api_view(['GET', 'POST'])
def songs_list(request):
    if request.method == 'GET':
        data = Song.objects.all()
        if 'music_genres' in request.GET:
            data = data.filter(music_type = request.GET.get('music_genres'))

        serializer = SongSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def music_genres(request):
    data = Song.CHOICES
    serializer = MusicGenreSerializer(data, many=True)
    return Response(serializer.data)
    

@api_view(['GET', 'POST'])
def dedications_list(request):
    if request.method == 'GET':
        data = Dedication.objects.all()

        serializer = DedicationSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        try:
            song_id = request.data.pop('song')
            song = Song.objects.get(id=song_id)
        except Song.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = DedicationSerializer(data=request.data)
        if serializer.is_valid():
            dedication = serializer.save()
            song.dedications.add(dedication)
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def song_detail(request, pk):
    try:
        student = Song.objects.get(pk=pk)
    except Song.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SongSerializer(student, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
