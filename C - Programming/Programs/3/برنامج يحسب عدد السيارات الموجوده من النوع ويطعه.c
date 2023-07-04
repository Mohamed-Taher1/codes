
#include <stdio.h>
#include <string.h>
int main() {
    int i,counter=0;
    char cars[20][100]={"BMW","Mercedes","BMW","BMW","BMW"},t[20];
    printf("Enter Model you search : ");
    scanf("%s",t);
    for(i=0;i<6;i++){
        strcmp(cars[i],t)? : counter++;
        
    }
    printf("%d",counter);
}