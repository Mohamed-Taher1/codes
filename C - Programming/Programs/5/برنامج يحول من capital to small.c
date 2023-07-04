#include <stdio.h>
#include <string.h>
int main() {
  int b,a,num=0;
  char x[20][100] = {"Mercedes","BMW","Mercedes","BMW","Mazda","Mercedes"};
  char y[20];
  printf("Enter the brand\n");
  scanf("%s",y);
  for(b=0; y[b] ;b++)
    if(y[b]>= 'A' && y[b] <= 'Z')
      y[b] += 32;
  for(b=0;b<6;b++){
    for(a=0;x[b][a];a++)
      if(x[b][a] >='A'&& x[b][a] <= 'Z')
        x[b][a]+=32;
      if(strcmp(y,x[b])== 0 )
        num++;
      }
  printf("%d\n",num);



    
      
  
}