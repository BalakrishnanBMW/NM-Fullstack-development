import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Code from './code';
import '../App.css';

function Mainframe()
{
    return (
        <>
            <div className='w-80 main-frame p-5'>
                <h1>ArrayList</h1>
                <p className='text-indent-50 text-justify'>
                Java ArrayList class uses a dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime. So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.
                </p>
                <p className='text-justify'>
                The ArrayList in Java can have the duplicate elements also. It implements the List interface so we can use all the methods of the List interface here. The ArrayList maintains the insertion order internally.
                </p>
                <p>
                The important points about the Java ArrayList class are:    
                </p>
                <ul className='text-justify'>
                    <li>Java ArrayList class can contain duplicate elements.</li>
                    <li>Java ArrayList class maintains insertion order.</li>
                    <li>Java ArrayList class is non synchronized.</li>
                    <li>Java ArrayList allows random access because the array works on an index basis.</li>
                    <li>In ArrayList, manipulation is a little bit slower than the LinkedList in Java because a lot of shifting needs to occur if any element is removed from the array list.</li>
                    <li>We can not create an array list of the primitive types, such as int, float, char, etc. It is required to use the required wrapper class in such cases.</li>
                    <li>Java ArrayList gets initialized by the size. The size is dynamic in the array list, which varies according to the elements getting added or removed from the list.</li>
                </ul>       
                <h4 className='h4 mt-4'>
                    Constructors of ArrayList
                </h4>
                <table className='table table-bordered w-75 m-auto mt-3'>
                    <thead className='text-center'>
                        <tr>
                            <th>Constructor</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ArrayList()</td>
                            <td>It is used to build an empty array list.</td>
                        </tr>
                        <tr>
                            <td>ArrayList(Collection&lt;? extends E&gt; c)</td>
                            <td>It is used to build an array list that is initialized with the elements of the collection c.</td>
                        </tr>
                        <tr>
                            <td>ArrayList(int capacity)</td>
                            <td>It is used to build an array list that has the specified initial capacity.</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className='h4 mt-4'>
                    ArrayList Example
                </h4>
                <Code>
                    {
                        `import java.util.*;  
public class ArrayListExample1
{  
    public static void main(String args[])
    {  
        ArrayList<String> list=new ArrayList<String>();
        list.add("Mango");    
        list.add("Apple");    
        list.add("Banana");    
        list.add("Grapes");    
        
        System.out.println(list);  
    }  
}                       `
                    }
                </Code>

                <Code>
                    {
                        `Output:\n["Mango","Apple","Banana","Grapes"]`
                    }
                </Code>

                <h4 className='h4 mt-4'>
                    Methods of ArrayList
                </h4>
                <table className='table table-bordered w-75 m-auto mt-3'>
                    <thead className='text-center'>
                        <tr>
                            <th>Methods</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>boolean add(E e)</td>
                            <td>It is used to append the specified element at the end of a list.</td>
                        </tr>
                        <tr>
                            <td>void add(int index, E element)</td>
                            <td>It is used to insert the specified element at the specified position in a list.</td>
                        </tr>
                        <tr>
                            <td>boolean addAll(Collection&lt;? extends E&gt; c)</td>
                            <td>It is used to append all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's iterator.</td>
                        </tr>
                        <tr>
                            <td>boolean addAll(int index, Collection&lt;? extends E&gt; c)</td>
                            <td>It is used to append all the elements in the specified collection, starting at the specified position of the list.</td>
                        </tr>
                        <tr>
                            <td>void clear()</td>
                            <td>It is used to remove all of the elements from this list.</td>
                        </tr>
                        <tr>
                            <td>E get(int index)</td>
                            <td>It is used to fetch the element from the particular position of the list.</td>
                        </tr>
                        <tr>
                            <td>boolean isEmpty()</td>
                            <td>It returns true if the list is empty, otherwise false.</td>
                        </tr>
                        <tr>
                            <td>boolean contains(Object o)</td>
                            <td>	It returns true if the list contains the specified element.</td>
                        </tr>
                        <tr>
                            <td>E remove(int index)</td>
                            <td>It is used to remove the element present at the specified position in the list.</td>
                        </tr>
                        <tr>
                            <td>boolean remove(Object o)</td>
                            <td>It is used to remove the first occurrence of the specified element.</td>
                        </tr>
                        <tr>
                            <td>boolean removeAll(Collection&lt;?&gt; c)</td>
                            <td>It is used to remove all the elements from the list.</td>
                        </tr>
                        <tr>
                            <td>E set(int index, E element)</td>
                            <td>It is used to replace the specified element in the list, present at the specified position.</td>
                        </tr>
                        <tr>
                            <td>int size()</td>
                            <td>It is used to return the number of elements present in the list.</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className='h4 mt-4'>
                    ArrayList adding elements
                </h4>
                <Code>
                    {
                        `import java.util.*;

public class ArrayListAdd
{
    public static void main(String [] args)
    {
        ArrayList<Integer> arrList = new ArrayList<>();
        arrList.add(4);
        arrList.add(6);
        arrList.add(5);
        arrList.add(8);

        System.out.println(arrList);

        ArrayList<String> arrListStr = new ArrayList<>();
        arrListStr.add("Mango");
        arrListStr.add("Apple");
        arrListStr.add("Banana");

        System.out.println(arrListStr);
    }
}`
                    }
                </Code>
                <Code>
                    {
                        `Output:\n[4, 6, 5, 8]\n[Mango, Apple, Banana]`
                    }
                </Code>

                <h4 className='h4 mt-4'>
                    Iterator method to iterate ArrayList
                </h4>
                <Code>
                    {
                        `import java.util.*;

public class ArrayListIter
{
    public static void main(String [] args)
    {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(5);
        arr.add(10);
        arr.add(6);

        Iterator itr = arr.iterator();
        while(itr.hasNext())
            System.out.print(" "+itr.next());
    }
}`
                    }
                </Code>
                <Code>
                    {
                        `Output:\n[4, 6, 5, 8]\n[Mango, Apple, Banana]`
                    }
                </Code>

                <h4 className='h4 mt-4'>
                    Iteratoring ArrayList using foreach loop.
                </h4>
                <Code>
                    {
                        `import java.util.*;
public class ArrayListForEach
{
    public static void main(String [] args)
    {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(23);
        arr.add(10);
        arr.add(76);
        
        for(int i:arr)
            System.out.print(" "+i);
    }
}`
                    }
                </Code>
                <Code>
                    {
                        `Output:\n 23 10 76`
                    }
                </Code>

                <h4 className='h4 mt-4'>
                    Getting and Setting element in ArrayList.
                </h4>
                <Code>
                    {
                        `import java.util.*;
public class ArrayListGetSet
{
    public static void main(String [] args)
    {                       
        ArrayList<String> arr = new ArrayList<>();
        arr.add("Apple");
        arr.add("Banana");
        arr.add("Aeroplane");

        for(int i=0;i<arr.size();i++)
            System.out.println(arr.get(i));

        arr.set(2,"Cherry");
        System.out.println("\nAfter update");

        for(int i=0;i<arr.size();i++)
            System.out.println(arr.get(i));
    }
}`
                    }
                </Code>
                <Code>
                    {
                        `Output: \n
Apple
Banana
Aeroplane

After update
Apple
Banana
Cherry`
                    }
                </Code>
                <h4 className='h4 mt-4'>
                    CURD operation using ArrayList
                </h4>
                <Code>
                    {
                        `import java.util.*;
class Student
{
    private int rollno;
    private String name;
    Student(int rollno, String name)
    {
        this.rollno = rollno;
        this.name = name;
    }
    public int getRollno()
    {
        return this.rollno;
    }
    public void setRollno(int rollno)
    {
        this.rollno = rollno;
    }
    public String getName()
    {
        return this.name;
    }
    public void setName(String name)
    {
        this.name = name;
    }
    public String toString()
    {
        return "Rollno : "+this.rollno+" | Name : "+this.name;
    }

}

public class ArrayListExample
{
    static ArrayList<Student> studList = new ArrayList<>();
    public static void createStudent(int rollno, String name)
    {
        Student s = new Student(rollno, name);
        studList.add(s);
    }
    public static void viewStudentList()
    {
        for(Student s:studList)
        System.out.println(s);
    }
    public static void deleteStudent(int s)
    {
        System.out.println(studList.get(s));
        for(int i=s;i<studList.size()-1;i++)
            studList.set(i,studList.get(i+1));
    }
    public static void updateStudent(int rollno)
    {
        Scanner sc = new Scanner(System.in);
        int flag=0;
        for(Student s:studList)
        {
            if(rollno == s.getRollno())
            {
                System.out.println(s);
                System.out.print("Enter the rollno to update: ");
                int rno = sc.nextInt();
                sc.nextLine();
                System.out.print("Enter the name to update: ");
                String name = sc.nextLine();
                s.setRollno(rno);
                s.setName(name);
                System.out.println("Student updated.");
                flag=1;
            }
        }
        if(flag==0)
            System.out.println("Student Not Found");
    }
    public static void main(String [] args)
    {
        Scanner sc = new Scanner(System.in);
        int op = 0;
        do
        {
            System.out.println("\\n -Menu-\\n1.Create\\n2.Delete\\n3.View\\n4.Update\\n5.exit\\n");
            op = sc.nextInt();

            switch(op)
            {
            case 1:
                System.out.print("Enter the rollno : ");
                int rno = sc.nextInt();
                sc.nextLine();
                System.out.print("Enter the name : ");
                String name = sc.nextLine();
                createStudent(rno,name);
                break;

            case 2:
                viewStudentList();
                System.out.println("Enter the Student : ");
                int s = sc.nextInt();
                deleteStudent(s-1);
                break;

            case 3:
                viewStudentList();
                break;

            case 4:
                viewStudentList();
                System.out.println("Enter the Student rollno: ");
                int st = sc.nextInt();
                updateStudent(st);
                break;

            default:
                op = 5;

            }
        }while(op<5);
    }
}`
                    }
                </Code>

            </div>
        </>
    );
}

export default Mainframe;  