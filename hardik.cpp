#include<bits/stdc++.h>
using namespace std;

void freq(int a[],int l){
	
	unordered_map<int,int>m;
	
	for(int i=0;i<l;i++){
		m[a[i]]++;
	}
	
	//traversing through map and printing frequencies
	cout<<endl<<"Frequencies of elements present in the array :: \n";
	for(auto i:m){
		cout<<i.first<<" :- "<<i.second<<"\n";
	}		
}


int main()
{
	// input of number of arrays
	cout<<"Enter number of arrays :: ";
	int n;
	cin>>n;
	
	for(int j=0;j<n;j++){
		cout<<endl<<"Enter the array number "<<j+1<<" ::\n";
		
		//enter the length of array
		int l;
		cout<<endl<<"Enter length of array(l) :: ";
		cin>>l;
		
		//array declaration 
		int a[l];
		cout<<endl<<"Enter the elements of array ::\n";
		for(int i=0;i<l;i++){
			cin>>a[i];
		}
		
		//freq function calling
		freq(a,l); 
	}
	return 0;
}
