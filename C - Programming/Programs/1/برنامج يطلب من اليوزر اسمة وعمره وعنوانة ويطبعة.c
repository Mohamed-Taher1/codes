#include <stdio.h>

int main() {
    char z[20],y[20];
    int x,a,i=1;
    
    
    do{
        printf("To Enter Data Enter 1 or 2 To Show Data : ");
        scanf("%d",&x);
        
        if(x == 1){
            printf("Enter Your Name : ");
            scanf("%s",z);
            printf("Enter Your Address : ");
            scanf("%s",y);
            printf("Enter Your Age : ");
            scanf("%d",&a);
            printf("Data Entered Successfuly :) \n");
            printf("To Enter Data Enter 1 or 2 To Show Data : ");
        }else if(x == 2){
            
            printf("Name : %s\n",z);
            printf("Address : %s\n",y);
            printf("Address : %d",a);
        
        }else{
            printf("Enter valied number \n");
            printf("To Enter Data Enter 1 or 2 To Show Data : ");
            
        }
        
    }while(x==i);
    
}