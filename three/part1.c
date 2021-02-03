int fun1 (int1, int2){
    if (int2>=int1){
        int sum = 0;
        while (int1<int2){
            sum = sum + 1;
            int1 = int1 + 1;
        }
        return sum;
    }
    else {
        return -1;
    }
}

void main(){
    printf( fun1(1, 3));
}