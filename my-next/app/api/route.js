export async function POST(){
    let data = [
        {
        'npm' : '2327250007',
        'nama' : 'Eddo Saputra'
        },
        {
        'npm' : '2327250006',
        'nama' : 'John Doe'
        },
    ];

    return Response.json(data);
    
}