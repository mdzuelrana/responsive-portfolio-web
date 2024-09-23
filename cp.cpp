#include <bits/stdc++.h>
using namespace std;
int n, h=0, m, y;
int main()
{
    int t;
    cin>>t;
    while(t--){
        int n,m;
        cin>>n>>m;
        string a;
        cin>>a;
        for (int i = 0; i < n; i++)
        {
            /* code */
            if(a[i]!='A' && a[i]!='B' && a[i]!='C' && a[i]!='D' && a[i]!='E' && a[i]!='F' && a[i]!='G'){
                h+=1;

            }
        }
        cout<<h+(m-1)<<endl;
        
    }
    
   return 0;
}