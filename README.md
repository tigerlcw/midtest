
#
def change(num):
    print("2진수",bin(num))
    print("8진수",oct(num))
    print("16진수",hex(num))

import quest_up

num10 = int(input("10진수:"))

quest_up.change(num10)

#
def gcd(a, b):
    if a < b:
        (a, b) = (b, a)
    while b != 0:
        (a, b) = (b, a % b)
    return a


import quest4

num1 = int(input("첫 번째 정수 : "))
num2 = int(input("두 번째 정수 : "))

print(quest4.gcd(num1,num2))


#
import random

dice = [1,2,3,4,5,6]

try_num = 1000
count = [0, 0, 0, 0, 0, 0]
for i in range(try_num) :
    random_dice = random.choice(dice)
    count[random_dice-1] += 1

for i in range(len(count)) :
    print("주사위가 %d 인경우는 %d번"%(i+1, count[i]))

#주사위 2개 1~12
import random
first = [1,2,3,4,5,6]
second = [1,2,3,4,5,6]
try_num = 1000
count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for i in range(try_num) :
    sum = 0
    random_first = random.choice(first)
    random_second = random.choice(second) 
    sum = random_first + random_second 
    count[sum-1] += 1 
for i in range(len(count)) :
    if i == 0:
        continue
    print("주사위의 합이 %2d 인경우는 %3d번"%(i+1, count[i]))


#
import coffee
print("** 안녕하세요. GOO Coffee 입니다. **")
order_list = [0,0,0]
stock = [10,10,10]
price = [3000,3500,4000]
items = ["아메리카노","라떼","핫초코"]

select = 1
while select != 0:
    coffee.menu()
    select = int(input("메뉴를 선택하세요 : "))
    if select == 1:
        coffee.order_menu(items,price)
        coffee.order(items,price,order_list)
        coffee.result(items,order_list)
    elif select == 2:
        order_list.append(0)
        items.append(input("추가하실 메뉴 : "))
        price.append(int(input("가격 : ")))
    elif select == 3:
        value = input("삭제하실 메뉴 : ")
        if value in items:
            items.remove(value)
            print(str(value)+" 을/를 삭제합니다")
        else:
            print("존재하지 않는 메뉴입니다.")

#
total_charge = 0
def menu():
    print()
    print("시스템 메뉴")
    print("  1. 주문")
    print("  2. 메뉴 추가")
    print("  3. 메뉴 삭제")
    print("  0. 종료")
    print()
    
def order_menu(items, price):
    print("주문 메뉴는 다음과 같습니다.")
    for i in range(len(items)):
        print(str(i+1)+". "+str(items[i])+" "+str(price[i])+" 원")
    print("0. 주문종료")

def order(items, price, or_list):
    global total_price
    total_price = 0
    for i in range(len(items)):
        or_list[i] = 0
    while 1:
        value = int(input(" 주문하실 메뉴는? : "))
        if value==0:
            print("주문을 종료합니다.")
            break
        elif value <= len(items):
            or_list[value - 1] += 1
            total_price += price[value - 1]
        else:
            print("잘못된 주문입니다. 다시입력해주세요.")
        
def result(items,or_list):
    if total_price:
        print(" 총 주문하신 커피는")
        for i in range(len(items)):
            if or_list[i]:
                print(str(items[i])+" : "+str(or_list[i])+" 잔",end=" ")
        print()
        print(" 총 금액은 "+str(total_price)+" 원 입니다.")
    else:
        print(" 주문하신 커피가 없습니다")
    print(" 감사합니다.")


#
