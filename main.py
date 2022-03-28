import speech_recognition as sr


listener = sr.Recognizer()
try:
    with sr.Microphone() as source:
        print("Cuthbert is listening...")
        audio = listener.record(source, duration=3)
        listener.adjust_for_ambient_noise(source)
        voice = listener.listen(source)
        command = listener.recognize_google(voice)
        print(command)
except:
    pass

