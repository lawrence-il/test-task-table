PGDMP     "    )            	    z         	   test_task    14.5    14.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    22010 	   test_task    DATABASE     f   CREATE DATABASE test_task WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE test_task;
                postgres    false            �            1259    22017    Data    TABLE     �  CREATE TABLE public."Data" (
    id integer NOT NULL,
    date timestamp with time zone DEFAULT '2022-10-05 04:39:40.985+05'::timestamp with time zone,
    name character varying(255),
    quantity integer,
    distance integer,
    "createdAt" timestamp with time zone DEFAULT '2022-10-05 04:39:40.985+05'::timestamp with time zone,
    "updatedAt" timestamp with time zone DEFAULT '2022-10-05 04:39:40.985+05'::timestamp with time zone
);
    DROP TABLE public."Data";
       public         heap    postgres    false            �            1259    22016    Data_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Data_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Data_id_seq";
       public          postgres    false    211            �           0    0    Data_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Data_id_seq" OWNED BY public."Data".id;
          public          postgres    false    210            �            1259    22011    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            `           2604    22020    Data id    DEFAULT     f   ALTER TABLE ONLY public."Data" ALTER COLUMN id SET DEFAULT nextval('public."Data_id_seq"'::regclass);
 8   ALTER TABLE public."Data" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �          0    22017    Data 
   TABLE DATA           ^   COPY public."Data" (id, date, name, quantity, distance, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   �       �          0    22011    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    209   �       �           0    0    Data_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Data_id_seq"', 7, true);
          public          postgres    false    210            g           2606    22025    Data Data_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Data"
    ADD CONSTRAINT "Data_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Data" DROP CONSTRAINT "Data_pkey";
       public            postgres    false    211            e           2606    22015     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    209            �   �   x�}�=�0Fg���$Qz�(l�(R�I��s#L�����^�9,Y;34#?��v��nnc��>s���q�8�ci�𜣟��W~r���2cq����!�r#� (�_TGX)�*�#?s#�$��!�*@�qlDG��PT{�d��w`8�YAw|.��0���yS�[�Pz�k+����9I[/��Ӄ�4�.������      �   ,   x�32022�0�4�0455�MI,I�M.JM,I�K�*����� ��	Z     