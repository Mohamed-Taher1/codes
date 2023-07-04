#include <stdio.h>
#include <string.h>

struct student{
    char name[20];
    char phone[20];
    int age[5];
};

struct compare{
    char z[20];
};

int main() {
    struct student x[2];
    struct compare m;
    int w=0,c,p;
    
    do{
        printf("( 1- To Enter Data , 2- To Search in data , 3-To close programme )\n            ");
        scanf("%d",&p);
        if(p == 1){
            for(c=0;c<2;c++){
                printf("Enter Name : ");
                scanf("%s",x[c].name);
                printf("Enter Phone : ");
                scanf("%s",x[c].phone);
                printf("Enter Age : ");
                scanf("%d",x[c].age);
            }
            printf("\n Data Entered Successfully :) \n");
        }else if(p == 2){
            printf("Enter A name To Search : ");
            scanf("%s",m.z);
            for(c=0;c<2;c++)
                if( strcmp( m.z,x[c].name )== 0 ){
                    printf("Name : %s\n",x[c].name);
                    printf("Phone : %s\n",x[c].phone);
                    printf("Age : %d\n",x[c].age);
                }
            
        }else if (p==3){
            return 0;
        }
    }while(w==0);
    
    
}