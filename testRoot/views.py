from pickle import FALSE
from unicodedata import name
from django.shortcuts import render, redirect, get_object_or_404
from .models import Play, Eat, TypeOfPlace, PrefeCode, Atmosphere, SaveRoot, KeepRoot, CommentDetail, Evaluation, GoodCheck, TokyoCity, SavePlace, CommentDetailTokyo, GoodCheckTokyo, EvaluationTokyo
from .forms import PlayForm, EatForm, TypeOfPlaceForm, SaveRootForm, KeepRootForm, CommentForm, EvaluationForm, GoodCheckForm, TokyoCityForm, SavePlaceForm, CommentTokyoForm, GoodCheckTokyoForm, EvaluationTokyoForm
import random
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator


def index(request):
    return render(request, 'testRoot/index.html')


def test_direction(request):
    return render(request, 'testRoot/test_direction.html')


def test1(request):
    if request.method == 'POST':

        cities = request.POST.getlist('city')
        place = request.POST.get('place')
        print(place)

        if len(cities) == 0:
            all_lists = TokyoCity.objects.all()
            if len(all_lists) < 3:
                return render(request, 'testRoot/index.html')
        else:
            all_lists = TokyoCity.objects.filter(
                city__in=cities).filter(type=place)
            if len(all_lists) < 3:
                return render(request, 'testRoot/index.html')
    else:
        return render(request, 'testRoot/index.html')

    a = random.randint(0, (len(all_lists) - 1))
    b = random.randint(0, (len(all_lists) - 1))
    c = random.randint(0, (len(all_lists) - 1))

    while a == b:
        b = random.randint(0, (len(all_lists) - 1))

    while a == c or b == c:
        c = random.randint(0, (len(all_lists) - 1))

    for i, list in enumerate(all_lists):
        if i == a:
            list_test_1 = list
            ido1 = list.ido
            keido1 = list.keido
            name1 = list.name
            address1 = list.address

        if i == b:
            list_test_2 = list
            ido2 = list.ido
            keido2 = list.keido
            name2 = list.name
            address2 = list.address

        if i == c:
            list_test_3 = list
            ido3 = list.ido
            keido3 = list.keido
            name3 = list.name
            address3 = list.address

    lists = [list_test_1, list_test_2, list_test_3]
    saveform = SavePlaceForm()

    content = {
        'ido1': ido1,
        'keido1': keido1,
        'ido2': ido2,
        'keido2': keido2,
        'ido3': ido3,
        'keido3': keido3,
        'lists': lists,
        'name1': name1,
        'address1': address1,
        'name2': name2,
        'address2': address2,
        'name3': name3,
        'address3': address3,
        'author': request.user.id,
        'first_id': list_test_1.id,
        'second_id': list_test_2.id,
        'third_id': list_test_3.id,
        'savePlace': saveform
    }
    return render(request, 'testRoot/test1.html', content)


def test2(request):
    if request.method == "POST":
        form = TypeOfPlaceForm(request.POST, request.FILES)

        if form.is_valid():
            check_ido = TypeOfPlace.objects.values_list('ido')
            check_keido = TypeOfPlace.objects.values_list('keido')
            post = form.save(commit=False)
            for a_ido in check_ido:
                for b_ido in a_ido:
                    if b_ido == post.ido:
                        for a_keido in check_keido:
                            for b_keido in a_keido:
                                if b_keido == post.keido:
                                    initial_dict = {
                                        'author': request.user,
                                    }
                                    form = TypeOfPlaceForm(
                                        initial=initial_dict)
                                    content = {
                                        'content': 'ごめんなさい！既にその場所は登録されています！',
                                        'form': form,
                                        'id': request.user.id,
                                        'author': request.user,
                                    }
                                    return render(request, 'testRoot/test2.html', content)
            post.save()
            return redirect('index')
    else:
        initial_dict = {
            'author': request.user,
        }
        form = TypeOfPlaceForm(initial=initial_dict)
        content = {
            'form': form,
            'id': request.user.id,
            'author': request.user,
        }
    return render(request, 'testRoot/test2.html', content)


def user(request, id):
    # lists = SavePlace.objects.order_by(
    #     '-created_at').filter(author=request.user)
    # lists_place = TokyoCity.objects.order_by(
    #     '-created_at').filter(author=request.user)

    p = Paginator(TokyoCity.objects.order_by(
        '-created_at').filter(author=request.user), 5)
    page = request.GET.get('page')
    place = p.get_page(page)

    q = Paginator(SavePlace.objects.order_by(
        '-created_at').filter(author=request.user), 5)
    qpage = request.GET.get('rootPage')
    root = q.get_page(qpage)
    rangeee = list(range(root.paginator.num_pages))

    rangee = list(range(place.paginator.num_pages))

    content = {
        'place': place,
        'root': root,
        'rangee': rangee,
        'rangeee': rangeee,
    }
    return render(request, 'testRoot/user.html', content)


def detail(request, id):
    root = get_object_or_404(SavePlace, pk=id)
    initial_dict = {
        "author": request.user,
    }
    form = CommentTokyoForm(initial=initial_dict)
    form_evaluation = EvaluationTokyoForm()
    form_good = GoodCheckTokyoForm()
    comment1 = CommentDetailTokyo.objects.filter(comment_place=root.place).order_by('-created_at')
    len_comment1 = len(comment1)
    contents = {
        "content": root,
        "form": form,
        'id': request.user.id,
        'detail1': root.place.id,
        'comment1': comment1,
        'len_comment1': len_comment1,
        'form_evaluation': form_evaluation,
        'form_good': form_good,
    }
    return render(request, 'testRoot/detail.html', contents)


def like(request, id):
    if request.method == 'POST':
        good_form = GoodCheckTokyoForm(request.POST)
        goodCheck = good_form.save(commit=False)
        good_list = GoodCheckTokyo.objects.filter(place=goodCheck.place)

        if len(good_list) != 0:
            for list in good_list:
                if list.author == goodCheck.author:
                    return redirect(request.META['HTTP_REFERER'])

        goodCheck.save()
        place = get_object_or_404(TokyoCity, pk=id)
        place.good += 1
        place.save()
        print(place.good)
        return redirect(request.META['HTTP_REFERER'])
    else:
        return redirect('index')


def topPage(request):
    return render(request, 'testRoot/topPage.html')


def topPage1(request):
    return render(request, 'testRoot/topPage1.html')


def topIndex(request):
    return render(request, 'testRoot/topPage.html')


def savecomment(request):
    if request.method == 'POST':
        form = CommentTokyoForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect(request.META['HTTP_REFERER'])
    else:
        return redirect('index')


def saveevaluation(request):
    if request.method == 'POST':
        form = EvaluationTokyoForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect(request.META['HTTP_REFERER'])
    else:
        return redirect('index')


def test3(request):
    if request.method == "POST":
        form = TokyoCityForm(request.POST, request.FILES)

        if form.is_valid():
            check_ido = TokyoCity.objects.values_list('ido')
            check_keido = TokyoCity.objects.values_list('keido')
            post = form.save(commit=False)
            for a_ido in check_ido:
                for b_ido in a_ido:
                    if b_ido == post.ido:
                        for a_keido in check_keido:
                            for b_keido in a_keido:
                                if b_keido == post.keido:
                                    initial_dict = {
                                        'author': request.user,
                                    }
                                    form = TokyoCityForm(initial=initial_dict)
                                    content = {
                                        'content': 'ごめんなさい！既にその場所は登録されています！',
                                        'form': form,
                                        'id': request.user.id,
                                        'author': request.user,
                                    }
                                    return render(request, 'testRoot/test3.html', content)
            post.save()
            return redirect('index')
    else:
        initial_dict = {
            'author': request.user,
        }
        form = TypeOfPlaceForm(initial=initial_dict)
        content = {
            'form': form,
            'id': request.user.id,
            'author': request.user,
        }
    return render(request, 'testRoot/test3.html', content)


def savePlace(request):
    if request.method == "POST":
        form = SavePlaceForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            print(post)
            return redirect(request.META['HTTP_REFERER'])
    else:
        return redirect('index')


# def test3(request):
#     return render(request, 'testRoot/test3.html')

# def test4(request):
#     return render(request, 'testRoot/test4.html')

# def test5(request):
#     return render(request, 'testRoot/test5.html')

# def save(request, id):
#     if request.method == 'POST':
#         form = SaveRoot(request.POST)
#         if form.is_valid():
#             post = form.save(commit=False)
#             post.save()
#             return redirect('user')
#     else:
#         return redirect('index')


# def rootDisplay(request):
#     lists_play = Play.objects.all()
#     lists_eat = Eat.objects.all()
#     x = random.randint(1,len(lists_play))
#     y = random.randint(1,len(lists_eat))
#     z = random.randint(1,len(lists_play))
#     while x == z:
#         z = random.randint(1,len(lists_play))

#     list_1 = Play.objects.filter(pk=x)
#     list_2 = Eat.objects.filter(pk=y)
#     list_3 = Play.objects.filter(pk=z)
#     lists = [list_1, list_2, list_3]


#     for i, list in enumerate(lists):
#         for date in list:
#             if i == 0:
#                 address1 = date.address
#             elif i == 1:
#                 address2 = date.address
#             else:
#                 address3 = date.address


#     content = {
#         'address1': address1,
#         'address2': address2,
#         'address3': address3,
#         'lists': lists
#     }

#     return render(request, 'testRoot/rootDisplay.html', content)

# def list_play(request):
#     lists = Play.objects.filter(pk=1)
#     content = {
#         'lists': lists
#     }

#     return render(request, 'testRoot/list_play.html', content)

# def list_eat(request):
#     x = random.randint(1,6)
#     lists = Eat.objects.filter(pk=x)
#     content = {
#         'lists': lists
#     }

#     return render(request, 'testRoot/list_eat.html', content)

# def test(request):
#     return render(request, 'testRoot/test.html')

# def list_all(request):
#     lists_test_play = TypeOfPlace.objects.filter(type="play")
#     lists_test_eat = TypeOfPlace.objects.filter(type="eat")

#     a = random.randint(0,len(lists_test_play) - 1)
#     b = random.randint(0,len(lists_test_eat) - 1)
#     c = random.randint(0,len(lists_test_play) - 1)

#     while a == c:
#         c = random.randint(0,len(lists_test_play))

#     for i, list in enumerate(lists_test_play):
#         print(i)
#         if i == a:
#             list_test_1 = list
#         if i == c:
#             list_test_3 = list

#     for i, list in enumerate(lists_test_eat):
#         if i == b:
#             list_test_2 = list

#     lists_test = [list_test_1,list_test_2,list_test_3]

#     content = {
#         'lists_test': lists_test
#     }
#     return render(request, 'testRoot/list_all.html', content)
