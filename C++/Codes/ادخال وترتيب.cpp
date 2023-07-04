#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>
#include <set>
#include <string>
#include <utility>
using namespace std;

int main(){
  
  pair<string,int> x[5];

  for(int i=0;i<5;i++){
    cout<<"Enter name : ";
    cin>>x[i].first;
    cout<<"Enter number : ";
    cin>>x[i].second;
  }

  sort(x,x+5);
    
  for(int i=0;i<5;i++){
    cout<<x[i].first <<" "<<x[i].second<<endl;
  }


    
    


}

