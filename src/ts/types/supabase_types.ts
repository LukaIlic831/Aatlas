export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          id: string;
          image: string | null;
          number: number | null;
          sub_title: string | null;
        };
        Insert: {
          id: string;
          image?: string | null;
          number?: number | null;
          sub_title?: string | null;
        };
        Update: {
          id?: string;
          image?: string | null;
          number?: number | null;
          sub_title?: string | null;
        };
        Relationships: [];
      };
      comment: {
        Row: {
          comments: number | null;
          creator: string | null;
          date_created: string | null;
          description: string | null;
          id: string;
          likes: number | null;
          parent: string | null;
          post_id: string | null;
        };
        Insert: {
          comments?: number | null;
          creator?: string | null;
          date_created?: string | null;
          description?: string | null;
          id: string;
          likes?: number | null;
          parent?: string | null;
          post_id?: string | null;
        };
        Update: {
          comments?: number | null;
          creator?: string | null;
          date_created?: string | null;
          description?: string | null;
          id?: string;
          likes?: number | null;
          parent?: string | null;
          post_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "comment_parent_fkey";
            columns: ["parent"];
            isOneToOne: false;
            referencedRelation: "comment";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comment_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "post";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comment_user_id_fkey";
            columns: ["creator"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          }
        ];
      };
      likes: {
        Row: {
          comment_id: string | null;
          id: string;
          post_id: string | null;
          user_id: string | null;
        };
        Insert: {
          comment_id?: string | null;
          id: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          comment_id?: string | null;
          id?: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "likes_comment_id_fkey";
            columns: ["comment_id"];
            isOneToOne: false;
            referencedRelation: "comment";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "post";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          }
        ];
      };
      location: {
        Row: {
          id: string;
          latitude: number | null;
          longitude: number | null;
          zoom: number | null;
        };
        Insert: {
          id?: string;
          latitude?: number | null;
          longitude?: number | null;
          zoom?: number | null;
        };
        Update: {
          id?: string;
          latitude?: number | null;
          longitude?: number | null;
          zoom?: number | null;
        };
        Relationships: [];
      };
      post: {
        Row: {
          category_id: string | null;
          comments: number | null;
          creator: string | null;
          date_created: string | null;
          description: string | null;
          id: string;
          image: Json[] | null;
          likes: number | null;
          location_id: string | null;
          title: string | null;
        };
        Insert: {
          category_id?: string | null;
          comments?: number | null;
          creator?: string | null;
          date_created?: string | null;
          description?: string | null;
          id?: string;
          image?: Json[] | null;
          likes?: number | null;
          location_id?: string | null;
          title?: string | null;
        };
        Update: {
          category_id?: string | null;
          comments?: number | null;
          creator?: string | null;
          date_created?: string | null;
          description?: string | null;
          id?: string;
          image?: Json[] | null;
          likes?: number | null;
          location_id?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "post_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "post_creator_fkey";
            columns: ["creator"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "post_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "location";
            referencedColumns: ["id"];
          }
        ];
      };
      user: {
        Row: {
          date_created: string | null;
          id: string;
          username: string | null;
        };
        Insert: {
          date_created?: string | null;
          id: string;
          username?: string | null;
        };
        Update: {
          date_created?: string | null;
          id?: string;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      _ltree_compress: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      _ltree_gist_options: {
        Args: {
          "": unknown;
        };
        Returns: undefined;
      };
      lca: {
        Args: {
          "": unknown[];
        };
        Returns: unknown;
      };
      lquery_in: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      lquery_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      lquery_recv: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      lquery_send: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      ltree_compress: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_decompress: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_gist_in: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_gist_options: {
        Args: {
          "": unknown;
        };
        Returns: undefined;
      };
      ltree_gist_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_in: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_recv: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltree_send: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      ltree2text: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      ltxtq_in: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltxtq_out: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltxtq_recv: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      ltxtq_send: {
        Args: {
          "": unknown;
        };
        Returns: string;
      };
      nlevel: {
        Args: {
          "": unknown;
        };
        Returns: number;
      };
      text2ltree: {
        Args: {
          "": string;
        };
        Returns: unknown;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
