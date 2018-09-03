public class BubbleSort {

    public static void main(String args[])
    {
        int [] arr={10,12,3,45,9};
        int n=arr.length;
        int i,j;

        System.out.println("Initially");

        for(i=0;i<n;i++)
        {
            System.out.println(arr[i]);
        }

        for(i=0;i<n-1;i++)
        {
            for(j=0;j<n-i-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

        System.out.println("Finally");
        for(i=0;i<n;i++)
        {
            System.out.println(arr[i]);
        }

    }
}
