from rest_framework import serializers
from .models import Song, Dedication

class SongSerializer(serializers.ModelSerializer):
    dedications = serializers.SerializerMethodField()

    def get_dedications(self, instance):
        return [d.name for d in instance.dedications.all()]

    class Meta:
        model = Song
        fields = '__all__'


class DedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dedication
        fields = '__all__'

class MusicGenreSerializer(serializers.Serializer):
    id = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()

    def get_id(self, obj):
        return obj[0]

    def get_name(self, obj):
        return obj[1]